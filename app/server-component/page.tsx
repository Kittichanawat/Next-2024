export default function ServerComponent() {
    const items = ['java', 'php', 'c++'];

    return (
        <div>
            {items.map((item) =>
                 <div key={item}>{item}</div>
                 )}
        </div>
    )
}