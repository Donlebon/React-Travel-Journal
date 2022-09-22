import Brazil from "./Brazil.jpg"
import Japan from "./Japan.jpg"
import Vietnam from "./Vietnam.jpg"

let TravelLog = [
    {
        id: 1,
        title: "Rio De Janeiro",
        location: "Brazil",
        googleMapsUrl: "https://goo.gl/maps/Cv1yEPvD8aquqFLA8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Sugarloaf Mountain is a peak situated in Rio de Janeiro, Brazil, at the mouth of Guanabara Bay on a peninsula that juts out into the Atlantic Ocean. Rising 396 m above the harbor, its name is said to refer to its resemblance to the traditional shape of concentrated refined loaf sugar.",
        imageUrl: {Brazil}
    },
    {
        id: 2,
        title: "Tokyo",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/TKu2Lefkx6BkVvc56",
        startDate: "24 May, 2021",
        endDate: "3 June, 2021",
        description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
        imageUrl: {Japan}
    },
    {
        id: 3,
        title: "Saigon",
        location: "Vietnam",
        googleMapsUrl: "https://goo.gl/maps/34khAPKcmHmDeqej8",
        startDate: "3 Nov, 2021",
        endDate: "15 Nov, 2021",
        description: "Ho Chi Minh City, formerly known as Saigon, is the largest city in Vietnam, situated in the southeastern region. The city surrounds the Saigon River and covers about 2,061 km². The city was the capital of South Vietnam until the end of the Vietnam War",
        imageUrl: {Vietnam}
    }
]

export default TravelLog
