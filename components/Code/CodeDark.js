const CodeDark = () => (
  <>
    <img src="/images/CodeDark.png" />
    <style jsx>{`
      img {
        width: 80%;
      }

      @media(max-width: 768px) {
        img {
          width: 60%;
        }
      }
      @media(max-width: 320px) {
        img {
          width: 80%;
        }
      }
    `}</style>
  </>
)

export default CodeDark
