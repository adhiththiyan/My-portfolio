import "./form.css"

const Form =()=>{
    return(
        <div className="form">
            <form>
                <label>Your name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows={6} placeholder="type your message"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
export default Form