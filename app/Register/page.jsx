export default function Home() {
    return(
        <>
        
        <body>
            <h1>Register</h1>
        <form action="/send-data-here" method="post">
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="datebirth">Birthdate</label>
        <input type="date" id="datebirth" name="datebirth" />
        <button type="submit">Submit</button>
        </form>
        </body>
       </>
        
    )
}