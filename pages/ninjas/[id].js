/* 
    This code runs on build-time, as the app is built and the components are rendered, 
    not in the browser 
*/
export const getStaticPaths = async () => {

    // usign "await" to call the functions because they are async; they return promises
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    /* 
        fallback: false means that if the user tries 
        to access a page with an id that doesn't exist 
        it will show the 404 page
    */
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {

    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    // Returning the props with the content "ninjas" containing the data from "data" variable
    return {
        props: { ninja: data }
    }

}

const Details = ({ ninja }) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    );
}

export default Details;