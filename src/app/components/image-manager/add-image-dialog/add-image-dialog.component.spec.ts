import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImageManagerService } from 'app/services/image-manager.service';
import { ServerService } from '../../../services/server.service';
import { MockedServerService } from '../../../services/server.service.spec';
import { of } from 'rxjs';
import { Server } from '../../../models/server';

import { AddImageDialogComponent } from './add-image-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToasterService } from 'app/services/toaster.service';
import { MockedToasterService } from 'app/services/toaster.service.spec';

export class MockedImageManagerService {
  public getImages(server: Server) {
    return of();
  }

}

describe('AddImageDialogComponent', () => {
  let component: AddImageDialogComponent;
  let fixture: ComponentFixture<AddImageDialogComponent>;
  
  let mockedServerService = new MockedServerService();
  let mockedImageManagerService = new MockedImageManagerService()
  let mockedToasterService = new MockedToasterService()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatCheckboxModule,
        MatDialogModule
      ],
      providers: [
        { provide: ServerService, useValue: mockedServerService },
        { provide: ImageManagerService, useValue: mockedImageManagerService },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: ToasterService, useValue: mockedToasterService },
      ],
      declarations: [ AddImageDialogComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
