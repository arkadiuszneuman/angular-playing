import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'id-and-param',
  imports: [],
  templateUrl: './id-and-param.html',
  styleUrl: './id-and-param.scss'
})
export class IdAndParam {
  id: string | null = null;
  param: string | null = null;
  route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.route.queryParamMap.subscribe(params => {
      this.param = params.get('param');
    });
  }
}
