const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      maxWidth: '100%',
      background: "linear-gradient(90deg, rgba(53, 180, 194, 0.15) 0%, #E1EEEB 99.99%)",
      borderRadius: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      background: 'linear-gradient(90deg, #FB5305 1.98%, #EFD00C 100%)',
      borderRadius: 'inherit',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Montserrat-Bold',
      fontSize: '14px',
      lineHeight: '131.39%',
      color: '#FFFFFF'
    }
  
    return (
      <div style={containerStyles}>
        <div className="prog" style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;