▶ cache
  ▶ getCacheKey
    ✔ should return a SHA256 hex string (1.2474ms)
    ✔ should produce different keys for different modes (0.2114ms)
    ✔ should produce different keys for different paths (0.1181ms)
  ✔ getCacheKey (2.0619ms)
  ▶ get/set
    ✔ should return cached value after set (0.2657ms)
    ✔ should return null for missing key (0.2039ms)
    ✔ should return null for expired entry (11.882ms)
    ✔ should respect custom TTL (1105.0129ms)
  ✔ get/set (1118.2767ms)
  ▶ invalidate
    ✔ should remove a cached entry (0.1733ms)
  ✔ invalidate (0.2498ms)
  ▶ getStats
    ✔ should track hits and misses (0.1247ms)
  ✔ getStats (0.1604ms)
  ▶ clear
    ✔ should remove all entries (0.1048ms)
  ✔ clear (0.1315ms)
✔ cache (1121.2336ms)
ℹ tests 10
ℹ suites 6
ℹ pass 10
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1181.8033
