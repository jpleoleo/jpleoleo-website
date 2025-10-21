import { Component, OnInit } from '@angular/core';
import { CONFIG as config } from 'config/config';

@Component({
  standalone: true,
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  CONFIG: any = config;
  constructor() { }

  ngOnInit(): void {
  }

}
