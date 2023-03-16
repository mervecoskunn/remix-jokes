export default function NewJokeRoute(){
return(
    <div>
        <p>Add your own hilarious joke</p>
        <form method ="post">

            <div>
                <label>
                    Name: <br /><input type="text" name="name" />
                </label>
            </div>
            <br />

            <div>
                <label>
                    Content: <br /> <textarea name="content"/>
                </label>
            </div>
            <br />

            <div>
                <button type="submit" className="button">
                    Add
                </button>
            </div>
        </form>
    </div>

    );

}