const React=require('react');
class Index extends React.Component{
    render(){
        const {products} =this.props;
        const myStyle = {
            color:'#fff',
            backgroundColor:'#f18973',
          };
        return(
        <> 
                    
                    <h1 class="title" style={myStyle}>THE KNITTY GRITTY</h1>
                    {products.map((products)=>{
                        return(
                    <a style={myStyle} href={`./routes/api/products${i}`}>{(products.name)}{(products.img)}</a>
                        )
                        })}
                    </>
        );
        
    }
}
module.exports=Index;
//<a id="logo" href="/">
//<img src={banner.img} alt="" />
//</a>
/*<a style={myStyle} href={`./womens${i}`}>Womens</a>
                    <a style={myStyle} href={`./toys${i}`}>Toys</a>
                    <a style={myStyle} href={`./decor${i}`}>Decor</a>*/