export default function Contacts({contacts}){
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact)=>{
                    return (
                        <li key={contacts._id}>
                            {contact.firstName} {contact.lastName}: {contact.subject}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}