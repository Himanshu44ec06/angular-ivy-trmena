import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Injectable()
export class LoadpdfService {
  pdfUrl = '';
  pdfDocument = null;
  pdfPages = [];
  pdfPagesNumber = 0;
  CurrentPage = 1;

  constructor() {}

  InitPdf(): void {
    this.CurrentPage = 1;
    this.pdfPages = [];
    pdfjsLib.getDocument(this.pdfUrl).promise.then((pdf) => {
      this.pdfDocument = pdf;
      this.pdfPagesNumber = pdf.numPages;
      for (let i = 0; i < this.pdfPagesNumber; i++) {
        pdf.getPage(1).then((page) => {
          this.pdfPages.push(page);
        });
      }
    });
  }

  loadPdfFromUrl(): void {}

  loadPdfFromLocal(): void {}
}
