import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function content({data}) {
    return(
        <>
        <Row xs={1} md={2} className="g-6 content">
        {data.map((eachItem) => {
            return (
                
                  <Col key={eachItem.id}>
                    <Card className='content'>
                      <Card.Img variant="top" src={eachItem.image} />
                      <Card.Body>
                        <Card.Title>{eachItem.name}</Card.Title>
                        <Card.Text>
                          {eachItem.name} is a {eachItem.gender} {eachItem.spesies} that live at {eachItem.origin.name} and {eachItem.name} is created at {eachItem.created}  
                        </Card.Text>
                        <ul className="tag">
                            <li>{eachItem.status}</li>
                            <li>{eachItem.gender}</li>
                            <li>{eachItem.species}</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
           
          
                // <div className="content" key={eachItem.id} style={{ backgroundImage: `url(${eachItem.image})` }}>
                //     <img></img>
                //      <div className="contentTittle">
                //         <p>{eachItem.name}</p>
                //     </div>
                // <div className="contentText">
                //     <p> {eachItem.name} is a {eachItem.gender} {eachItem.spesies} that live at {eachItem.origin.name} and {eachItem.name} is created at {eachItem.created}  </p>
                //     <ul className="tag">
                //         <li>{eachItem.status}</li>
                //         <li>{eachItem.gender}</li>
                //         <li>{eachItem.species}</li>
                //     </ul>
                //     </div>
                // </div>
             );
             
        })}
           </Row>
        

        </>
    )
}