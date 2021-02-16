(function() {var implementors = {};
implementors["async_io"] = [{"text":"impl&lt;T:&nbsp;AsRawFd&gt; AsRawFd for Async&lt;T&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl AsRawFd for Poll","synthetic":false,"types":[]},{"text":"impl AsRawFd for Registry","synthetic":false,"types":[]},{"text":"impl AsRawFd for Sender","synthetic":false,"types":[]},{"text":"impl AsRawFd for Receiver","synthetic":false,"types":[]}];
implementors["socket2"] = [{"text":"impl AsRawFd for Socket","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()