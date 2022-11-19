export type TitleForBody = {
    titleForBody: string
}
export const Body = (props: TitleForBody) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    )
}

