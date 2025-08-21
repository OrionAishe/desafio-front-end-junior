import { useEffect, useState, type Key } from "react"
import { getCatList, getTagList } from "./assets/api/api"
import Card from "./components/molecules/Card";


function App() {
  const [tags, setTags] = useState<any>();
  const [cats, setCats] = useState<any>();
  const tagToFilter: string[] = [];

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

  cats?.map((item: { tags: any; }) => {
    return item?.tags?.map((item: any) => {
      tagToFilter.push(item)
      return item;
    })
  })

  const tagsFiltered = tags?.map((item : string) => {
    const tag = item;
    return tagToFilter?.filter((item : string) => {
      return item == tag;
    })
  }).filter((item: string | any[]) => {
      return item.length > 0;
    })

  return (
    <>
      {tagsFiltered?.length > 0 ? tagsFiltered.map((item: string, index: Key) => {
        return <Card key={index} title={item[0]} catData={cats} />
      }) : tags?.map((item: string, index: Key) => {
        return <Card key={index} title={item[0]} catData={cats} />
      })}
    </>
  )
}

export default App
