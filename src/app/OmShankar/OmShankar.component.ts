import { Component } from '@angular/core'; 

@Component({
  selector: 'app-OmShankar',
  templateUrl: './OmShankar.component.html',
  styleUrls: ['./OmShankar.component.css']
})
export class OmShankarComponent {
mailUs()
{
  alert("Thanks for choosing us !\n\nDeveloper's Mail: official.amitrakte@gmail.com")
}
phoneUs()
{
  alert("Thanks for choosing us !\n\nDeveloper's Mobile: +91 7770081004")
}
webUs()
{
  window.location.href="https://github.com/Omi92229/ComplaintRedressalSystem";
}
}
