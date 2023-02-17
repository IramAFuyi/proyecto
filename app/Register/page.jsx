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
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <label for="datebirth">Birthdate</label>
        <input type="date" id="birthdate" name="birthdate" />
        <button type="submit">Submit</button>
        <label htmlFor="Facebook">Facebook</label>
        <br />
        <label htmlFor="Google">Google</label>
        </form>
        </body>
       </>
        
    )
}