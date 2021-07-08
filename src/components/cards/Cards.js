import React from 'react'
import Card from './Card'

import './styles.css'

const Cards = () => {

    const cardsData = [
        {
            image: "https://images.unsplash.com/photo-1567334037232-8e02cf81ca04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwb3BlbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "127 sightings"
        },
        {
            image: "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYmxvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "117 sightings"
        },
        {
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-yellow-flowering-plant-royalty-free-image-1575667390.jpg",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "101 sightings"
        },
        {
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "27 sightings"
        },
        {
            image: "https://www.burpee.com/media/amasty/blog/COS-A_00039.jpg",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "37 sightings"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6FJqXT3_aO5CCdNtmoewoh6DfFrIZLYM81aAMAyXdMnZOIYI2zhv-T5xHnRhBCBPwpI&usqp=CAU",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "157 sightings"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSEnN9iJcJH0f78-fghOQt_GvSdsBtIzZ6A&usqp=CAU",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "123 sightings"
        },
        {
            image: "https://growingfamily.co.uk/wp-content/uploads/2020/06/japanese-anemone-678x1024.jpg",
            title: "Baloon Flower",
            subtitle: "Platycodon grandiflorus",
            sightings: "121 sightings"
        },
    ]

    return (
        <div className="cardSection">
            {(cardsData || []).map((card, index) => {
                console.log(card, index)
                return <Card details={card} />

            })}

        </div>
    )
}

export default Cards
