import styles from "./Button.module.css"

export type NameType = {
    name: string
    callBack: () => void
}

export const Button = (props: NameType) => {
    const onClickHandler = () => {
         props.callBack()
    }
    return (
        <div>
            <button className={styles.redButton} onClick={onClickHandler}>{props.name}</button>
        </div>

    )
}
