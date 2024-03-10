const Card = (props) => (
  <section style={{
    backgroundColor: 'white',
    borderRadius: '15px',
    marginTop: '15px',
    marginLeft: '15px',
    minHeight: '500px',
    width: "100%",
    boxShadow: "1px 1px 1px lightgray",
    ...props.style
  }}>{props.children}</section>
)

export default Card;