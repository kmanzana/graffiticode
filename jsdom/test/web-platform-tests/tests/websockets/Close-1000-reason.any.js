// META: script=websocket.sub.js

        var testOpen = async_test("W3C WebSocket API - Create WebSocket - Close the Connection - Connection should be opened");
        var testClose = async_test("W3C WebSocket API - Create WebSocket - Close the Connection - close(1000, reason) - readyState should be in CLOSED state and wasClean is TRUE - Connection should be closed");

        var wsocket = CreateWebSocket(false, false, false);
        var isOpenCalled = false;

        wsocket.addEventListener('open', testOpen.step_func(function (evt) {
            wsocket.close(1000, "Clean Close");
            isOpenCalled = true;
            testOpen.done();
        }), true);

        wsocket.addEventListener('close', testClose.step_func(function (evt) {
            assert_true(isOpenCalled, "WebSocket connection should be opened");
            assert_equals(wsocket.readyState, 3, "readyState should be 3(CLOSED)");
            assert_equals(evt.wasClean, true, "wasClean should be TRUE");
            testClose.done();
        }), true);
