// swift-tools-version:5.1

import PackageDescription

let package = Package(
    name: "SnapTrade",
    platforms: [
        .iOS(.v12),
        .macOS(.v10_13),
        .tvOS(.v12),
        .watchOS(.v4),
    ],
    products: [
        // Products define the executables and libraries produced by a package, and make them visible to other packages.
        .library(
            name: "SnapTrade",
            targets: ["SnapTrade"]
        ),
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        .package(url: "https://github.com/konfig-dev/AnyCodable", from: "0.6.9"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages which this package depends on.
        .target(
            name: "SnapTrade",
            dependencies: ["AnyCodable", ],
            path: "SnapTrade"
        ),
        .testTarget(name: "Tests", dependencies: ["SnapTrade"], path: "Tests")
    ]
)