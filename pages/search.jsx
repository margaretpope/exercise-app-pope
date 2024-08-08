//search for exercises
//external api calls
import { withIronSessionSsr } from "iron-session/next";
import Head from "next/head";
import sessionOptions from "../config/session";
import {useExerciseContext} from "../context/exercise";
import Header from "../components/header"
import * as actions from "../context/exercise/actions"
import {useState, useRef} from "react"

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({req}) {
        const {user} = req.session;
        const props = {};
        if (user) {
            props.user = req.session.user;
        }
        props.isLoggedIn = !!user;
        return {props};
    },
    sessionOptions
);

export default function Search(props) {
    const [{searchResults}, dispatch] = useExerciseContext()
    const [search, setSearch] = useState("")
    const [fetching, setFetching] = useState(false)
    const [previousSearch, setPreviousSearch] = useState()
    const inputRef = useRef()
    const inputDivRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        if (fetching || !search.trim() || search === previousSearch) return
        setPreviousSearch(search)
        setFetching(true)
        const res = await fetch (
            `https://api.api-ninjas.com/v1/exercises?muscle=${search}`,
            {
                headers: {
                    'X-Api-Key': 'K9uVhoHgQabLFXZg9xnvEw==HY6NE69guV75NOxH'
                }
            }
        )
        if (res.status !== 200) return
        const data = await res.json()
        dispatch({
            action: actions.SEARCH_EXERCISES,
            payload: data
                ?.map(({name, type, equipment, difficulty, instructions}) => ({
                    name,
                    type,
                    equipment,
                    difficulty,
                    instructions
                }))
        })
        setFetching(false)
    }
    
    return (
        <>
            <Head>
                <title>FitQuest | Exercise Search</title>
            </Head>
            <Header isLoggedIn={props.isLoggedIn}/>
            <main>
                <h1>Exercise Search</h1>
                <form onSubmit={handleSubmit}>
                    <label>Search for exercises by muscle group.</label>
                    <input 
                        ref={inputRef}
                        type="text"
                        name="exercise-search"
                        id="exercise-search"
                        value={search}/>
                    <button type="submit">Submit</button>
                </form>
                {
                    fetching
                    ? <Loading />
                    : searchResults?.length
                    ? <ExerciseList exercise = {searchResults}/>
                    : <NoResults
                    {...{inputRef, inputDivRef, privousQuery}}
                    clearSearch={() => setQuery("")}/>
                }
            </main>
        </>
    )
}
