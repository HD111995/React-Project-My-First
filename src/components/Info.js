import MusicForm from "./musicForm";

const Info = () => {
    return ( 
        <section className="music">
            <p>Due to COVID-19 and the temporary closing
               of Bathtub Gin, our nightly entertainment
               is currently on pause. Stay tuned for updates
               on our reopening date and new events, coming soon!</p>
               <div>
            <MusicForm
                src="img/dj.jpg"
                kind="DJs & Dance Tracks"
                date="Every Thursday, Friday & Saturday Night"
                time="From 9pm & 10pm"
                text="If you're looking for a packed crowd, come when the party
                 is bigger, the pace is faster, and the morals are looser."
            >

            </MusicForm>
            <MusicForm
                 src="img/jazz.jpg"
                 kind="Jazz n'Jive"
                 date="Every Monday"
                 time="9-11pm"
                 text="Jazz up your Monday nights with intimate 
                 and lively performances by a rotating selection of renowned bands."
                >
    
                </MusicForm>
                <MusicForm
                   src="img/after.jpg"
                   kind="Burlesque After Dark"
                   date="Every Tuesday & Sunday"
                   time="9:30pm"
                   text="Enter the world of burlesque and
                    lose yourself in enticing witty performances, 
                    exceptional cocktails, and lively music."  
                >
    
                </MusicForm>
                </div>
        </section>
     );
}
 
export default Info;