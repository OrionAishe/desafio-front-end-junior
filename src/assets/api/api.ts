import axios from "axios";
import tags from "../mock/tags-offline.json";
import cats from "../mock/cats-offline.json";

export async function getTagList() {
    try {
        const response = await axios.get('https://cataas.com/api/tags');
        return response.data;
    } catch (error) {
        return tags;
    }
}

export async function getCatList() {
    try {
        const response = await axios.get('https://cataas.com/api/cats');
        return response.data;
    } catch (error) {
        return cats;
    }
}

export default { getTagList, getCatList };