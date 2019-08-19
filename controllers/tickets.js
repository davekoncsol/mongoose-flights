var Ticket = require('../models/ticket');
var Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
};

function create(req, res) {

    // console.log(ticket);
    Flight.findById(req.params.id, function(err, flight){
        req.body.flight = flight._id
        var ticket = new Ticket(req.body);
        ticket.save(function(err){
            if(err) return res.redirect(`back`);
            res.redirect(`/flights/${flight._id}`)
        })
    })
  
    // Flight.findById(req.params.id, function(err, flight){

    // })
    // ticket.flight
    // ticket.save(function(err) {
    //   if (err) return res.redirect('flights/:id/tickets/new');
    //   console.log(flight);
    //   res.redirect('/flights/:id/');
    // });
  }

// function newTicket(req, res) {
//     Ticket.find({}, function(err, tickets) {
//       res.render('tickets/new', {
//         title: 'Add Ticket',
//         tickets
//       });
//     });
//   }


function newTicket(req, res){
Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets,
            flight
        })
    });
});
}