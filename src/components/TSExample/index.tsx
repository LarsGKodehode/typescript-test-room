/**
 * Example of how to use TypeScript strongly typed props in React
 */


/**
 * Prop type definition
 */
type Props = {
  title: string,
  text: string,
  /**
   * Optional type
   */
  hidden?: true,
  /**
   * Typed array
   */
  dataList: Information[]
}

/**
 * Data Object definition
 */
interface Information {
  id: number, name: string
}

/**
 * Component showcasing types for React
 * Notice the React.FC<T> type, this is whats called a generic type
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 */
const TSExample: React.FC<Props> = (props: Props) => {
  return (
    <div
    // Since this is optional, check if undefined
    // Uses the array method for joining them up into a single string
      className={[
        "bg-slate-400 p-4 rounded-md",
        props.hidden && "hidden",
      ].join(" ")}
    >
      <h3>{props.title}</h3>

      <p>{props.text}</p>

      {
        props.dataList.map(
          (element) => {
            return (
              <div key={element.id}>
                <h4>{element.name}</h4>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default TSExample