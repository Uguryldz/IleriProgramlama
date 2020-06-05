var computeArea = function(A, B, C, D, E, F, G, H) {
    const alanA = (D - B) * (C - A); // 24
    const alanb = (H - F) * (G - E); // 28
    let Alan = 0
    const isOverlapping = A < G && B < H && E < C && F < D
    if (isOverlapping) {
        const UstKenar = Math.max(A, E)
        const AltKenar = Math.max(B, F)
        const SolKenar = Math.min(C, G)
        const SagKenar = Math.min(D, H)
        Alan = (SolKenar - UstKenar) * (SagKenar - AltKenar)
    }
    return alanA + alanb - Alan;
};