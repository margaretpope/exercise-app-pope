import {useRouter} from "next/router"
import { withIronSessionSsr } from "iron-session/next";
import Head from "next/head";
import sessionOptions from "../config/session";
import Header from "../components/header"
import {useState} from "react"
import styles from "../styles/Home.module.css"

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({req, query}) {
        const {user} = req.session;
        const {search} = query
        const props = {};
        if (user) {
            props.user = req.session.user;
        }
        if (search) {
            const res = await fetch (
                `https://api.api-ninjas.com/v1/exercises?muscle=${search}`,
                {
                    headers: {
                        'X-Api-Key': process.env.API_KEY
                    }
                }
            )
        if (res.status === 200) {
            const data = await res.json()
            props.searchResults = data
        }
        }
        props.isLoggedIn = !!user;
        return {props};
    },
    sessionOptions
);

export default function Search(props) {
    const router = useRouter()
    const [search, setSearch] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
    if (!search) return
    router.replace (router.pathname + "?search=" + search)
    }
    console.log(props.searchResults)
    return (
        <>
            <Head>
                <title>FitQuest | Exercise Search</title>
                <meta name="description" content="FitQuest" />
            </Head>
            <Header isLoggedIn={props.isLoggedIn}/>
            <main>
                <h1 className={styles.title}>Exercise Search</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>Search for exercises by muscle group.</label>
                    <input
                        type="text"
                        name="exercise-search"
                        id="exercise-search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
                {
                    props.searchResults?.length
                    ? <section><ExerciseList exercise = {props.searchResults}/></section>
                    : <p className={styles.description}>No results.</p>
                }
            </main>
        </>
    )
}

function ExerciseList({title, type, equipment, difficulty, instructions}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{type}</p>
            <p>{equipment}</p>
            <p>{difficulty}</p>
            <p>{instructions}</p>
        </>
    )
}
