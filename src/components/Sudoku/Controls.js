const Controls = ({ editSymbols, setEditSymbols, setSymbols }) => {
  const defaultSymbols = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ]
  const japaneseSymbols = [
    ["一", "二", "三"],
    ["四", "五", "六"],
    ["七", "八", "九"],
  ]

  return (
    <div className={"d-flex "}>
      <button
        onClick={() => {
          setEditSymbols(!editSymbols)
        }}
      >
        Edit Symbols
      </button>
      <button
        onClick={() => {
          setSymbols(japaneseSymbols)
        }}
      >
        🎌
      </button>
      <button
        onClick={() => {
          setSymbols(defaultSymbols)
        }}
      >
        Default Symbols
      </button>
    </div>
  )
}

export default Controls
