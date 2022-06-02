const React=require('react');
class Products extends React.Component{
    render(){
        const {productsli}= this.props;
        const myStyle= {
            color:'#fff',
            backgroundColor:'#f18973',
        };
        return(
            <>
                   <h1>Hello World</h1>
            </>
        );
    }
}
module.exports=Products; 