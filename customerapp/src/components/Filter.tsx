type Props = {
    filterEvent: (txt:string) => void
}
export default function Filter(props:Props) {
    return <div>
        <input type="text" 
        onChange={(evt) => props.filterEvent(evt.target.value)}
        placeholder="search by name" />
    </div>
}