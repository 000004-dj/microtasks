export type TitleForHeader = {
    titleForHeader: string
}

export const Header = (props: TitleForHeader) => {
    return (
        <div>
            {props.titleForHeader}
        </div>
    )
}

