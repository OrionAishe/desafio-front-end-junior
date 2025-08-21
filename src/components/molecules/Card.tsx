import { Accordion, AccordionDetails, AccordionSummary, Card as CardMUI } from "@mui/material";

interface props {
    title: string;
    catData: {
        id: string,
        tags: string[],
        mimetype: string,
        createdAt: string
    }[] | undefined;
}

const Card = (props: props) => {
    const { title, catData } = props;
    const filteredIds = catData?.map((item) => {
        const cat = item?.tags?.filter((item: string) => {
            return item == title;
        })
        return { cat, item }
    }).filter((item: any) => {
        return item?.cat?.length > 0;
    }).map((item: any) => {
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
                        return <p key={index}>{item.id}</p>
                    })}
                </CardMUI>
            </AccordionDetails>
        </Accordion>
    )
}

export default Card;