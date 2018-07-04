import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SharedataProvider {
  titleData;
  picImage;
  menuData;
  constructor(public http: HttpClient) {
    console.log('Hello SharedataProvider Provider');
  }
setPicImage(picImage)
{
  this.picImage=picImage;
}
getPicImage()
{
  return this.picImage;
}
  setTitleData(data)
  {
    this.titleData=data;
  }
  setMenuData(data)
{
  this.menuData=data;
}
getTitleData()
{
  return this.titleData;
}
getMenuData()
{
  return this.menuData;
}
}

