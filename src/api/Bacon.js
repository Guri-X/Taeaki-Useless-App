import axios from "axios";

const Bacon = () => ({

    cook() {
        return axios.get("https://baconipsum.com/api/?type=meat-and-filler")
    }

})

export default Bacon