import { FormControl, FormLabel, Input } from "@mui/material";

interface props {
    fields: {
        label: string;
        type?: string;
    }[];
}

const FormStep = (props: props) => {
    const { fields } = props;
    return (
        <FormControl sx={{width: '100%', display: 'flex'}}>
            {fields.map((item) => {
                return (
                    <>
                        <FormLabel sx={{marginTop: '20px'}}>
                            {item.label}
                        </FormLabel>
                        <Input type={item.type}></Input>
                    </>
                )
            })}
        </FormControl>
    )
}

export default FormStep;