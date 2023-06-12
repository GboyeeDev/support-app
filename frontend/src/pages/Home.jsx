import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return <>
    <section className="heading">
      <h1>What area do you need our support</h1>
      <p>Please choose from the option below</p>
    </section>

    <Link to='/new-ticket' className='btn btn-reverse btn-block'>
      <FaQuestionCircle /> Create New Ticket
    </Link>

    <Link to='/tickets' className='btn btn-block'>
      <FaTicketAlt /> View my Tickets
    </Link>
  </>;
}

export default Home;
