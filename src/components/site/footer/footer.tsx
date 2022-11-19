export type TitleForFooter = {
    titleForFooter: string
}

export const Footer = (props: TitleForFooter) => {
    return (
        <div>
            {props.titleForFooter}
        </div>
    )
}