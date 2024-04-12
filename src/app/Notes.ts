export interface Note {
    id: number;
    date:string;
    title: string;
    text: string;
  }
  export const NOTES: Note[] = [
    {
      id: 1,
      date: "11 March 2009",
      title: 'Book a Ticket for Movie',
      text: 'Booked tickets for the latest Avengers movie premier at the cinema.'
    },
    {
      id: 2,
      date: "01 April 2002",
      title: 'Go for lunch',
      text: 'Had a delicious lunch with friends at the new Italian restaurant downtown.'
    },
    {
      id: 3,
      date: "15 June 2015",
      title: 'Finish Project Proposal',
      text: 'Completed the project proposal document and submitted it to the client for review.'
    },
    {
      id: 4,
      date: "22 October 2018",
      title: 'Buy Birthday Gift',
      text: 'Purchased a special gift for Mom\'s birthday from the local boutique.'
    },
    {
      id: 5,
      date: "09 December 2013",
      title: 'Attend Conference',
      text: 'Participated in the annual tech conference and learned about the latest industry trends.'
    },
    {
      id: 6,
      date: "07 May 2011",
      title: 'Family Dinner',
      text: 'Enjoyed a lovely dinner with family members to celebrate Grandma\'s birthday.'
    },
    {
      id: 7,
      date: "18 August 2016",
      title: 'Plan Vacation',
      text: 'Started planning for the upcoming summer vacation to the Caribbean islands.'
    },
    {
      id: 8,
      date: "30 September 2019",
      title: 'Complete Online Course',
      text: 'Finished the online course on web development and received the certificate of completion.'
    },
    {
      id: 9,
      date: "03 November 2014",
      title: 'Buy New Laptop',
      text: 'Purchased a new laptop with upgraded specifications for work and personal use.'
    }
  ];