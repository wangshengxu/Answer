/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { memo, FC, useState } from 'react';
import { Alert, Col } from 'react-bootstrap';

interface Props {
  data;
}
const Index: FC<Props> = ({ data }) => {
  const [show, setShow] = useState(Boolean(data));

  return (
    <Col lg={10} className="mb-3">
      <Alert
        variant="info"
        show={show}
        dismissible
        onClose={() => {
          setShow(false);
        }}>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </Alert>
    </Col>
  );
};

export default memo(Index);
