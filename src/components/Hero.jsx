export default function Hero(){
    return(
        <>
           <h5>Complete this training program if you want to...</h5> 
           <ol className="benefits-list">
                <li>Follow a simple program with guaranteed results</li>
                <li>Get git, Healthy , dtrong and shredded</li>
                <li>Learn more</li>
                <li>Become a lifetime gym girl</li>
           </ol>

           <h3>The Rules</h3>
           <p>To complete this program, you <b>MUST</b> follow these 3 simple ryles:</p>
           <ul className="rules-list">
            <div className='rule-item'>
                <p><b>Rest</b></p>
                <p>Rest at least 48 hours between training the same muscle group</p>
            </div>

            <div className='rule-item'>
                <p><b>Reps</b></p>
                <p>Every rep is a pause rep following a <abbr title="2 seconds down, 2 seconds pause, 2 seconds up"> 2 - 2 - 2 tempo </abbr></p>
            </div>
           

            <div className='rule-item'>
                <p><b>Weight*</b></p>
                <p>Use a weight that allows you to complete the prescribed reps with good form</p>
            </div>
        </ul>
        <small>*The first and second set should be at 7775% and 85% of you working weight used for the last two sets. </small>
        <h3>the training plan</h3>
        <p>this training plan uses the structure known as the <b>GROW SPLIT</b>, and follows this rotation:</p>
        <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
        <p>Complete all of the workouts and track your progress along the way!</p>
        </>
    )
}