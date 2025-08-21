import { Accordion, AccordionDetails, AccordionSummary, Card as CardMUI, Typography } from "@mui/material";

export interface CatData{
        id: string,
        tags: string[],
        mimetype: string,
        createdAt: string
}

interface props {
    title: string;
    catData: CatData[] | undefined;
}

const Card = (props: props) => {
    const { title, catData } = props;
    const filteredIds = catData?.map((item) => {
        const cat = item?.tags?.filter((item: string) => {
            return item == title;
        })
        return { cat, item }
    }).filter((item) => {
        return item?.cat?.length > 0;
    }).map((item) => {
        return item.item;
    })

    return (
        <Accordion>
            <AccordionSummary>
                {title}
            </AccordionSummary>
            <AccordionDetails>
                <CardMUI>
                    {filteredIds?.map((item, index) => {
                        return <Typography padding={"10px"} key={index}>{item.id}</Typography>
                    })}
                </CardMUI>
            </AccordionDetails>
        </Accordion>
    )
}

export default Card;