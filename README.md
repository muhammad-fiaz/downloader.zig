<div align="center">

# downloader.zig

<a href="https://muhammad-fiaz.github.io/downloader.zig/"><img src="https://img.shields.io/badge/docs-muhammad--fiaz.github.io-blue" alt="Documentation"></a>
<a href="https://ziglang.org/"><img src="https://img.shields.io/badge/Zig-0.15.1-orange.svg?logo=zig" alt="Zig Version"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig"><img src="https://img.shields.io/github/stars/muhammad-fiaz/downloader.zig" alt="GitHub stars"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig/issues"><img src="https://img.shields.io/github/issues/muhammad-fiaz/downloader.zig" alt="GitHub issues"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig/pulls"><img src="https://img.shields.io/github/issues-pr/muhammad-fiaz/downloader.zig" alt="GitHub pull requests"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig"><img src="https://img.shields.io/github/last-commit/muhammad-fiaz/downloader.zig" alt="GitHub last commit"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig"><img src="https://img.shields.io/github/license/muhammad-fiaz/downloader.zig" alt="License"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig/actions/workflows/ci.yml"><img src="https://github.com/muhammad-fiaz/downloader.zig/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
<img src="https://img.shields.io/badge/platforms-linux%20%7C%20windows%20%7C%20macos-blue" alt="Supported Platforms">
<a href="https://github.com/muhammad-fiaz/downloader.zig/actions/workflows/release.yml"><img src="https://github.com/muhammad-fiaz/downloader.zig/actions/workflows/release.yml/badge.svg" alt="Release"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig/releases/latest"><img src="https://img.shields.io/github/v/release/muhammad-fiaz/downloader.zig?label=Latest%20Release&style=flat-square" alt="Latest Release"></a>
<a href="https://pay.muhammadfiaz.com"><img src="https://img.shields.io/badge/Sponsor-pay.muhammadfiaz.com-ff69b4?style=flat&logo=heart" alt="Sponsor"></a>
<a href="https://github.com/sponsors/muhammad-fiaz"><img src="https://img.shields.io/badge/Sponsor-💖-pink?style=social&logo=github" alt="GitHub Sponsors"></a>
<a href="https://github.com/muhammad-fiaz/downloader.zig/releases"><img src="https://img.shields.io/github/downloads/muhammad-fiaz/downloader.zig/total?label=Downloads&logo=github" alt="Downloads"></a>
<a href="https://hits.sh/muhammad-fiaz/downloader.zig/"><img src="https://hits.sh/muhammad-fiaz/downloader.zig.svg?label=Visitors&extraCount=0&color=green" alt="Repo Visitors"></a>

<p><em>A fast, production-ready HTTP/HTTPS download library for Zig.</em></p>

<b>📚 <a href="https://muhammad-fiaz.github.io/downloader.zig/">Documentation</a> |
<a href="https://muhammad-fiaz.github.io/downloader.zig/api/client">API Reference</a> |
<a href="https://muhammad-fiaz.github.io/downloader.zig/guide/getting-started">Quick Start</a> |
<a href="CONTRIBUTING.md">Contributing</a></b>

</div>

---
> [!NOTE]
> `downloader.zig` has been replaced by [`httpx.zig`](https://github.com/muhammad-fiaz/httpx.zig). Please use `httpx.zig` for file downloads and HTTP networking in Zig.
> 
A production-grade, high-performance HTTP/HTTPS download library for Zig, designed with a clean, intuitive, and developer-friendly API.

**⭐️ If you love `downloader.zig`, make sure to give it a star! ⭐️**

---

<details>
<summary><strong>✨ Features of Downloader.zig</strong> (click to expand)</summary>

| Feature                    | Description                                                 |
| -------------------------- | ----------------------------------------------------------- |
| 🌐 **HTTP/HTTPS Support**  | Full protocol support via `std.http.Client`                 |
| 🔄 **Automatic Retries**   | Configurable retry logic with exponential backoff           |
| ⏸️ **Resume Capability**   | Continue interrupted downloads using Range headers          |
| 📊 **Progress Tracking**   | Real-time callbacks with speed and ETA calculations         |
| 📁 **Smart File Handling** | Multiple strategies for existing files (`FileExistsAction`) |
| 🔒 **Thread Safety**       | One client per thread pattern for concurrent downloads      |
| 📦 **Zero Dependencies**   | Built entirely on the Zig standard library                  |
| 🖥️ **Cross-Platform**      | Windows, Linux, macOS (32-bit and 64-bit)                   |
| ⚡ **High Performance**    | Streaming downloads with configurable buffer sizes          |
| 🎯 **Simple API**          | Clean, intuitive interface for common download tasks        |
| 🔧 **Configurable**        | Extensive configuration options for all use cases           |
| 📈 **Update Checker**      | Automatically check for new versions                        |

</details>

---

<details>
<summary><strong>📌 Prerequisites & Supported Platforms</strong> (click to expand)</summary>

<br>

## Prerequisites

Before installing downloader.zig, ensure you have the following:

| Requirement          | Version                   | Notes                                                      |
| -------------------- | ------------------------- | ---------------------------------------------------------- |
| **Zig**              | 0.15.0+                   | Download from [ziglang.org](https://ziglang.org/download/) |
| **Operating System** | Windows 10+, Linux, macOS | Cross-platform support                                     |

> **Tip:** Verify your Zig installation by running `zig version` in your terminal.

---

## Supported Platforms

Downloader.zig supports a wide range of platforms and architectures:

| Platform    | Architectures                   | Status          |
| ----------- | ------------------------------- | --------------- |
| **Windows** | x86_64, x86                     | ✅ Full support |
| **Linux**   | x86_64, x86, aarch64            | ✅ Full support |
| **macOS**   | x86_64, aarch64 (Apple Silicon) | ✅ Full support |

</details>

---

## Installation

### Method 1: Zig Fetch (Recommended)

The easiest way to add downloader.zig to your project:

```bash
zig fetch --save https://github.com/muhammad-fiaz/downloader.zig/archive/refs/tags/0.0.1.tar.gz
```

This automatically adds the dependency with the correct hash to your `build.zig.zon`.

### Method 2: Manual Configuration

Add to your `build.zig.zon`:

```zig
.dependencies = .{
    .downloader = .{
        .url = "https://github.com/muhammad-fiaz/downloader.zig/archive/refs/tags/0.0.1.tar.gz",
        .hash = "...", // Run zig fetch to get the correct hash
    },
},
```

Then in your `build.zig`:

```zig
const downloader = b.dependency("downloader", .{
    .target = target,
    .optimize = optimize,
});
exe.root_module.addImport("downloader", downloader.module("downloader"));
```

---

## Quick Start

```zig
const std = @import("std");
const downloader = @import("downloader");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    // Simple download
    const bytes = try downloader.download(
        allocator,
        "https://example.com/file.pdf",
        "file.pdf"
    );

    std.debug.print("Downloaded {d} bytes\n", .{bytes});
}
```

---

## Usage Examples

### Basic Download with Progress

```zig
const std = @import("std");
const downloader = @import("downloader");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    var client = try downloader.Client.init(allocator, .{});
    defer client.deinit();

    const bytes = try client.download(
        "https://example.com/file.pdf",
        "file.pdf",
        progressCallback,
    );

    std.debug.print("\nDownloaded {d} bytes\n", .{bytes});
}

fn progressCallback(p: downloader.Progress) bool {
    if (p.percentage()) |pct| {
        std.debug.print("\rProgress: {d:.1}%", .{pct});
    }
    return true; // Continue downloading
}
```

### Advanced Configuration

```zig
var config = downloader.Config.default();

// Retry settings
config.max_retries = 5;
config.retry_delay_ms = 1000;
config.exponential_backoff = true;

// Resume and file handling
config.resume_downloads = true;
config.file_exists_action = .rename_with_number;

// Buffer size
config.buffer_size = 128 * 1024; // 128 KB

// Custom User-Agent
config.user_agent = "MyApp/1.0";

var client = try downloader.Client.init(allocator, config);
defer client.deinit();
```

### Concurrent Downloads

```zig
const std = @import("std");
const downloader = @import("downloader");

const tasks = [_]struct { url: []const u8, output: []const u8 }{
    .{ .url = "https://example.com/file1.pdf", .output = "file1.pdf" },
    .{ .url = "https://example.com/file2.pdf", .output = "file2.pdf" },
    .{ .url = "https://example.com/file3.pdf", .output = "file3.pdf" },
};

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    var threads: [tasks.len]std.Thread = undefined;

    // Spawn download threads
    for (tasks, 0..) |task, i| {
        threads[i] = try std.Thread.spawn(.{}, downloadTask, .{
            allocator, task.url, task.output,
        });
    }

    // Wait for all downloads
    for (&threads) |*t| {
        t.join();
    }
}

fn downloadTask(allocator: std.mem.Allocator, url: []const u8, output: []const u8) void {
    var client = downloader.Client.init(allocator, .{}) catch return;
    defer client.deinit();
    _ = client.download(url, output, null) catch {};
}
```

---

## Configuration Options

### FileExistsAction

Control behavior when the output file already exists:

| Value                  | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `.rename_with_number`  | Create `file (1).ext`, `file (2).ext`, etc. (default) |
| `.overwrite`           | Replace existing file                                 |
| `.resume_or_overwrite` | Try resume, otherwise overwrite                       |
| `.skip`                | Don't download if file exists                         |
| `.fail`                | Return error if file exists                           |

### Config Fields

| Field                  | Type               | Default               | Description                   |
| ---------------------- | ------------------ | --------------------- | ----------------------------- |
| `max_retries`          | `u32`              | `3`                   | Maximum retry attempts        |
| `retry_delay_ms`       | `u64`              | `1000`                | Delay between retries         |
| `exponential_backoff`  | `bool`             | `true`                | Double delay after each retry |
| `buffer_size`          | `usize`            | `65536`               | Read buffer size (64 KB)      |
| `resume_downloads`     | `bool`             | `false`               | Enable resume capability      |
| `progress_interval_ms` | `u64`              | `100`                 | Progress report interval      |
| `file_exists_action`   | `FileExistsAction` | `.rename_with_number` | File conflict handling        |
| `user_agent`           | `?[]const u8`      | `null`                | Custom User-Agent header      |

---

## Progress Tracking

The `Progress` struct provides comprehensive download statistics:

```zig
fn progressCallback(p: downloader.Progress) bool {
    // Percentage (0.0 to 100.0)
    if (p.percentage()) |pct| {
        std.debug.print("Progress: {d:.1}%\n", .{pct});
    }

    // Speed in bytes per second
    std.debug.print("Speed: {d} B/s\n", .{p.bytes_per_second});

    // ETA in seconds
    if (p.eta_seconds) |eta| {
        std.debug.print("ETA: {d} seconds\n", .{eta});
    }

    // Total downloaded
    std.debug.print("Downloaded: {d} bytes\n", .{p.totalDownloaded()});

    // Return false to cancel download
    return true;
}
```

---

## Examples

Run the included examples:

```bash
# Basic download with progress bar
zig build run

# Advanced configuration demo
zig build run-advanced

# Concurrent downloads
zig build run-concurrent

# Checksum verification
zig build run-checksum

# Check for updates
zig build run-update_check
```

---

## Building

```bash
# Run tests
zig build test --summary all

# Build all examples
zig build

# Format code
zig fmt src/ examples/
```

---

## Documentation

Full documentation is available at: **https://muhammad-fiaz.github.io/downloader.zig/**

- [Getting Started](https://muhammad-fiaz.github.io/downloader.zig/guide/getting-started)
- [Installation](https://muhammad-fiaz.github.io/downloader.zig/guide/installation)
- [Configuration](https://muhammad-fiaz.github.io/downloader.zig/guide/configuration)
- [Progress Tracking](https://muhammad-fiaz.github.io/downloader.zig/guide/progress)
- [Resume Downloads](https://muhammad-fiaz.github.io/downloader.zig/guide/resume)
- [Retry Logic](https://muhammad-fiaz.github.io/downloader.zig/guide/retry)
- [Error Handling](https://muhammad-fiaz.github.io/downloader.zig/guide/errors)
- [Concurrent Downloads](https://muhammad-fiaz.github.io/downloader.zig/guide/concurrent)
- [API Reference](https://muhammad-fiaz.github.io/downloader.zig/api/)

---

## Platform Support

| Platform | 32-bit | 64-bit |
| -------- | ------ | ------ |
| Windows  | ✅     | ✅     |
| Linux    | ✅     | ✅     |
| macOS    | ✅     | ✅     |

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting PRs.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Links

- **Documentation**: https://muhammad-fiaz.github.io/downloader.zig/
- **Repository**: https://github.com/muhammad-fiaz/downloader.zig
- **Issues**: https://github.com/muhammad-fiaz/downloader.zig/issues
- **Releases**: https://github.com/muhammad-fiaz/downloader.zig/releases

---
