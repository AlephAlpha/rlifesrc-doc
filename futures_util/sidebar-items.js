initSidebarItems({"macro":[["delegate_access_inner",""],["delegate_all",""],["delegate_future",""],["delegate_stream",""],["join","Polls multiple futures simultaneously, returning a tuple of all results once complete."],["pending","A macro which yields to the event loop once."],["pin_mut","Pins a value on the stack."],["poll","A macro which returns the result of polling a future once within the current `async` context."],["ready","Extracts the successful type of a `Poll<T>`."],["select","Polls multiple futures and streams simultaneously, executing the branch for the future that finishes first. If multiple futures are ready, one will be pseudo-randomly selected at runtime. Futures directly passed to `select!` must be `Unpin` and implement `FusedFuture`."],["select_biased","Polls multiple futures and streams simultaneously, executing the branch for the future that finishes first. Unlike `select!`, if multiple futures are ready, one will be selected in order of declaration. Futures directly passed to `select_biased!` must be `Unpin` and implement `FusedFuture`."],["try_join","Polls multiple futures simultaneously, resolving to a [`Result`] containing either a tuple of the successful outputs or an error."]],"mod":[["future","Asynchronous values."],["lock","Futures-powered synchronization primitives."],["never","This module contains the `Never` type."],["stream","Asynchronous streams."],["task","Tools for working with tasks."]]});