import Greetings from "./Greetings";

type greetingsListProps = {allNamesToGreet: string[]}

export default function GreetingsList (props: greetingsListProps) {
    return(<div>{props.allNamesToGreet.map(
        name => <Greetings nameToGreet={name}/>
        )}</div>

    )
}