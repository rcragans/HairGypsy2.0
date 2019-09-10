import React, {Component} from 'react'

class AboutMe extends Component{
    render(){
        return(
            <div className="aboutMe">
                <h1 className="aboutHeader">About Me</h1>
                <div className="image">
                    <img className="photo" alt=""src="../photo19.jpeg"></img>
                </div>
                <div className="aboutMe">
                        <p className="aboutMeLists">I specialize in mens cuts.
                        All the way from hipster to business professional.
                        I worked in downtown Decatur at a barbershop for 2 years doing all the latest mens hipster cuts.
                        I worked in Peachtree City for 15 years in full service salons.
                        I decided 5 years ago to switch to cutting only mens hair, it changed my life!
                        I'm so excited to join Salon Lofts and have the freedom to create the perfect atmosphere that I have wanted to provide for my clients for years!
                        Cheers!</p>
                </div>
            </div>

        )
    }
}

export default AboutMe