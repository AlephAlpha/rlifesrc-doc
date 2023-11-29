(function() {var type_impls = {
"signal_hook":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SignalIterator%3CSD,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/signal_hook/iterator/backend.rs.html#428-486\">source</a><a href=\"#impl-SignalIterator%3CSD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SD, E: <a class=\"trait\" href=\"signal_hook/iterator/exfiltrator/trait.Exfiltrator.html\" title=\"trait signal_hook::iterator::exfiltrator::Exfiltrator\">Exfiltrator</a>&gt; <a class=\"struct\" href=\"signal_hook/iterator/backend/struct.SignalIterator.html\" title=\"struct signal_hook::iterator::backend::SignalIterator\">SignalIterator</a>&lt;SD, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook/iterator/backend.rs.html#431-438\">source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook/iterator/backend/struct.SignalIterator.html#tymethod.new\" class=\"fn\">new</a>&lt;R&gt;(signals: SD) -&gt; Self<span class=\"where fmt-newline\">where\n    SD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html\" title=\"trait core::borrow::BorrowMut\">BorrowMut</a>&lt;<a class=\"struct\" href=\"signal_hook/iterator/backend/struct.SignalDelivery.html\" title=\"struct signal_hook::iterator::backend::SignalDelivery\">SignalDelivery</a>&lt;R, E&gt;&gt;,\n    R: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span></h4></section></summary><div class=\"docblock\"><p>Create a new infinite iterator for signals registered with the passed\nin <a href=\"signal_hook/iterator/backend/struct.SignalDelivery.html\" title=\"struct signal_hook::iterator::backend::SignalDelivery\"><code>SignalDelivery</code></a> instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_signal\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook/iterator/backend.rs.html#451-473\">source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook/iterator/backend/struct.SignalIterator.html#tymethod.poll_signal\" class=\"fn\">poll_signal</a>&lt;R, F&gt;(\n    &amp;mut self,\n    has_signals: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut F</a>\n) -&gt; <a class=\"enum\" href=\"signal_hook/iterator/backend/enum.PollResult.html\" title=\"enum signal_hook::iterator::backend::PollResult\">PollResult</a>&lt;E::Output&gt;<span class=\"where fmt-newline\">where\n    SD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html\" title=\"trait core::borrow::BorrowMut\">BorrowMut</a>&lt;<a class=\"struct\" href=\"signal_hook/iterator/backend/struct.SignalDelivery.html\" title=\"struct signal_hook::iterator::backend::SignalDelivery\">SignalDelivery</a>&lt;R, E&gt;&gt;,\n    R: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Return a signal if there is one or tell the caller that there is none at the moment.</p>\n<p>You have to pass in a callback which checks the underlying reading end of the pipe if\nthere may be any pending signals. This callback may or may not block. If the callback\nreturns <a href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\" title=\"primitive bool\"><code>true</code></a> this method will try to fetch the next signal and return it as a\n<a href=\"signal_hook/iterator/backend/enum.PollResult.html#variant.Signal\" title=\"variant signal_hook::iterator::backend::PollResult::Signal\"><code>PollResult::Signal</code></a>. If the callback returns <a href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\" title=\"primitive bool\"><code>false</code></a> the method will return\n<a href=\"signal_hook/iterator/backend/enum.PollResult.html#variant.Pending\" title=\"variant signal_hook::iterator::backend::PollResult::Pending\"><code>PollResult::Pending</code></a> and assume it will be called again at a later point in time.\nThe callback may be called any number of times by this function.</p>\n<p>If the iterator was closed by the <a href=\"signal_hook/iterator/backend/struct.Handle.html#method.close\" title=\"method signal_hook::iterator::backend::Handle::close\"><code>close</code></a> method of the associated\n<a href=\"signal_hook/iterator/backend/struct.Handle.html\" title=\"struct signal_hook::iterator::backend::Handle\"><code>Handle</code></a> this method will return <a href=\"signal_hook/iterator/backend/enum.PollResult.html#variant.Closed\" title=\"variant signal_hook::iterator::backend::PollResult::Closed\"><code>PollResult::Closed</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method\"><a class=\"src rightside\" href=\"src/signal_hook/iterator/backend.rs.html#479-485\">source</a><h4 class=\"code-header\">pub fn <a href=\"signal_hook/iterator/backend/struct.SignalIterator.html#tymethod.handle\" class=\"fn\">handle</a>&lt;R&gt;(&amp;self) -&gt; <a class=\"struct\" href=\"signal_hook/iterator/backend/struct.Handle.html\" title=\"struct signal_hook::iterator::backend::Handle\">Handle</a><span class=\"where fmt-newline\">where\n    SD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"signal_hook/iterator/backend/struct.SignalDelivery.html\" title=\"struct signal_hook::iterator::backend::SignalDelivery\">SignalDelivery</a>&lt;R, E&gt;&gt;,\n    R: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span></h4></section></summary><div class=\"docblock\"><p>Get a shareable <a href=\"signal_hook/iterator/backend/struct.Handle.html\" title=\"struct signal_hook::iterator::backend::Handle\"><code>Handle</code></a> for this instance.</p>\n<p>This can be used to add further signals or terminate the whole\nsignal iteration using the <a href=\"signal_hook/iterator/backend/struct.Handle.html#method.close\" title=\"method signal_hook::iterator::backend::Handle::close\"><code>close</code></a> method.</p>\n</div></details></div></details>",0,"signal_hook::iterator::backend::OwningSignalIterator","signal_hook::iterator::backend::RefSignalIterator"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()