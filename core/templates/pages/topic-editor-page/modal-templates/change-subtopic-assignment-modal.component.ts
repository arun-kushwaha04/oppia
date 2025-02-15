// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for change subtopic assignment modal.
 */

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmOrCancelModal } from 'components/common-layout-directives/common-elements/confirm-or-cancel-modal.component';
import { Subtopic } from 'domain/topic/subtopic.model';

@Component({
  selector: 'oppia-change-subtopic-assignment-modal',
  templateUrl: './change-subtopic-assignment-modal.component.html'
})

export class ChangeSubtopicAssignmentModalComponent
  extends ConfirmOrCancelModal implements OnInit {
  subtopics: Subtopic[];
  selectedSubtopicId: number;
  constructor(
    private ngbActiveModal: NgbActiveModal,
  ) {
    super(ngbActiveModal);
  }

  ngOnInit(): void {
    this.selectedSubtopicId = null;
  }

  changeSelectedSubtopic(subtopicId: number): void {
    this.selectedSubtopicId = subtopicId;
  }
}
