import { useEffect, useState } from "react";
import Card, { type CatData } from "../components/molecules/Card/Card";
import { getCatList, getTagList } from "../assets/api/api";

const CatList = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [cats, setCats] = useState<CatData[] | undefined>([]);

    useEffect(() => {
        async function getTags() {
            const data = await getTagList()
            setTags(data);
        }
        async function getCats() {
            const data = await getCatList()
            setCats(data);
        }
        getCats();
        getTags();
    }, [])

    const tagToFilter = cats?.flatMap((cat) => cat.tags) ?? [];

    const tagsFiltered = tags?.map((item: string) => {
        const tag = item;
        return tagToFilter?.filter((item: string) => {
            return item == tag;
        })
    }).filter((item: string | string[]) => {
        return item.length > 0;
    })

    const tagsToRender = tagsFiltered?.length ? tagsFiltered : tags ?? [];

    return (
        <>
            {tagsToRender.map((item, index) => (
                <Card key={index} title={item[0]} catData={cats} />
            ))}

        </>
    )
}

export default CatList;